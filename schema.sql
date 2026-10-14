-- =====================================================================
-- Coffee Shop POS Database Schema (Schema ប្រព័ន្ធ POS ហាងកាហ្វេ)
-- Compatible with PostgreSQL & SQLite
-- =====================================================================

-- ១. តារាង Categories (ប្រភេទភេសជ្ជៈ/ទំនិញ)
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name_kh VARCHAR(100) NOT NULL,
    name_en VARCHAR(100) NOT NULL,
    icon VARCHAR(50) DEFAULT 'coffee',
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ២. តារាង Products (មុខទំនិញ/ភេសជ្ជៈ)
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    category_id INT REFERENCES categories(id) ON DELETE SET NULL,
    name_kh VARCHAR(150) NOT NULL,
    name_en VARCHAR(150) NOT NULL,
    base_price DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    cost_price DECIMAL(10, 2) DEFAULT 0.00,
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ៣. តារាង Modifiers (ជម្រើសបន្ថែម: ស្ករ, ទឹកកក, Topping, ទំហំ)
CREATE TABLE IF NOT EXISTS modifiers (
    id SERIAL PRIMARY KEY,
    group_name VARCHAR(50) NOT NULL, -- 'size', 'sugar', 'ice', 'topping'
    name VARCHAR(100) NOT NULL,
    extra_price DECIMAL(10, 2) DEFAULT 0.00
);

-- ៤. តារាង Orders (ក្បាលវិក្កយបត្រ)
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    order_number VARCHAR(50) UNIQUE NOT NULL, -- e.g. 'ORD-20261010-001'
    order_type VARCHAR(20) DEFAULT 'dine_in', -- 'dine_in', 'takeaway'
    subtotal_usd DECIMAL(10, 2) NOT NULL,
    discount_usd DECIMAL(10, 2) DEFAULT 0.00,
    total_usd DECIMAL(10, 2) NOT NULL,
    exchange_rate INT NOT NULL DEFAULT 4100,  -- $1 = 4100 KHR
    total_khr INT NOT NULL,
    status VARCHAR(20) DEFAULT 'completed',   -- 'pending', 'completed', 'cancelled'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ៥. តារាង Order Items (មុខទំនិញក្នុងវិក្កយបត្រ)
CREATE TABLE IF NOT EXISTS order_items (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE CASCADE,
    product_id INT REFERENCES products(id),
    product_name VARCHAR(150) NOT NULL,      -- snapshot name at purchase
    size VARCHAR(10) DEFAULT 'M',
    sugar VARCHAR(20) DEFAULT '50%',
    ice VARCHAR(30) DEFAULT 'normal',
    addons TEXT,                             -- e.g. 'Extra Shot, Boba'
    quantity INT NOT NULL DEFAULT 1,
    unit_price DECIMAL(10, 2) NOT NULL,      -- unit price including size/addons
    subtotal DECIMAL(10, 2) NOT NULL
);

-- ៦. តារាង Payments (ព័ត៌មាននៃការទូទាត់ប្រាក់)
CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE CASCADE,
    payment_method VARCHAR(20) NOT NULL,     -- 'cash', 'khqr'
    amount_received_usd DECIMAL(10, 2) DEFAULT 0.00,
    amount_received_khr INT DEFAULT 0,
    change_given_usd DECIMAL(10, 2) DEFAULT 0.00,
    change_given_khr INT DEFAULT 0,
    transaction_ref VARCHAR(100),            -- Bank / Bakong hash if KHQR
    paid_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================================
-- ទិន្នន័យគំរូដំបូង (Sample Initial Seed Data)
-- =====================================================================

INSERT INTO categories (name_kh, name_en, icon, sort_order) VALUES
('កាហ្វេ', 'Coffee', 'coffee', 1),
('តែ & ទឹកដោះគោ', 'Tea & Milk', 'cup-soda', 2),
('ក្រឡុក', 'Frappe', 'sparkles', 3),
('នំ & អាហារសម្រន់', 'Bakery', 'croissant', 4);

INSERT INTO products (category_id, name_kh, name_en, base_price, cost_price) VALUES
(1, 'កាហ្វេទឹកដោះគោទឹកកក', 'Iced Milk Coffee', 1.50, 0.45),
(1, 'អាមេរិកាណូទឹកកក', 'Iced Americano', 1.25, 0.30),
(1, 'ឡាតេទឹកកក', 'Iced Latte', 1.75, 0.55),
(2, 'តែបៃតងទឹកដោះគោ', 'Iced Green Tea Latte', 1.50, 0.40),
(2, 'តែក្រូចឆ្មាទឹកឃ្មុំ', 'Honey Lemon Tea', 1.50, 0.35),
(3, 'ដូងក្រឡុក', 'Coconut Frappe', 2.25, 0.60),
(4, 'នំខ្វាសង់', 'Butter Croissant', 1.50, 0.70);
