/**
 * dataService.js
 * Data fetching, caching, and state management for SD Data
 */

const DataService = {
  data: null,
  lastFetched: null,
  isLoading: false,
  error: null,
  listeners: [],

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  },

  notify() {
    this.listeners.forEach(fn => fn({
      isLoading: this.isLoading,
      data: this.data,
      lastFetched: this.lastFetched,
      error: this.error
    }));
  },

  async fetchData(forceRefresh = false) {
    this.isLoading = true;
    this.error = null;
    this.notify();

    try {
      const url = forceRefresh ? '/api/data?refresh=true' : '/api/data';
      
      const headers = {};
      const savedAuth = localStorage.getItem('sd_auth_token');
      if (savedAuth) {
        headers['Authorization'] = 'Basic ' + savedAuth;
      }

      let response = await fetch(url, { headers });

      // If protected by auth and got 401
      if (response.status === 401) {
        const user = prompt('SD Data Secure ERP: សូមបញ្ចូល Username');
        const pass = prompt('SD Data Secure ERP: សូមបញ្ចូល Password');
        if (user && pass) {
          const token = btoa(`${user}:${pass}`);
          localStorage.setItem('sd_auth_token', token);
          headers['Authorization'] = 'Basic ' + token;
          response = await fetch(url, { headers });
        }
      }

      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}: បរាជ័យក្នុងការទាញទិន្នន័យ (ពិនិត្យសិទ្ធិ ឬកំហុស Server)`);
      }
      const json = await response.json();
      if (json.status !== 'success') {
        throw new Error(json.message || 'កំហុសមិនស្គាល់ពី Server');
      }

      this.data = json;
      this.lastFetched = new Date();
      this.isLoading = false;
      this.error = null;
      this.notify();
      return this.data;
    } catch (err) {
      console.error('DataService Fetch Error:', err);
      this.isLoading = false;
      this.error = err.message || 'មិនអាចភ្ជាប់ទៅកាន់ប្រភពទិន្នន័យបានទេ';
      this.notify();
    }
  },

  // Start background live polling every 15 seconds
  startLiveSync(intervalMs = 15000) {
    if (this.pollTimer) clearInterval(this.pollTimer);
    this.pollTimer = setInterval(() => {
      // Background silent refresh (only updates if there are changes)
      this.fetchData(true);
    }, intervalMs);
  },

  stopLiveSync() {
    if (this.pollTimer) clearInterval(this.pollTimer);
  },

  // Filter sales and expenses by date range [startDate, endDate] inclusive
  filterByRange(startDateStr, endDateStr) {
    if (!this.data) {
      return { sales: [], expenses: [] };
    }

    const filteredSales = this.data.sales.filter(item => {
      return item.date >= startDateStr && item.date <= endDateStr;
    });

    const filteredExpenses = this.data.expenses.filter(item => {
      return item.date >= startDateStr && item.date <= endDateStr;
    });

    return {
      sales: filteredSales,
      expenses: filteredExpenses
    };
  }
};
