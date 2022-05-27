export const Data = [
    {"id": "1000","features": "BSP Integration","feature_owner":"Aravind","function": "Integration","domain":"Linux Driver","description": "Product Description","image": "bamboo-watch.jpg","status": "ON", "mode":"Medium", "milestone":"PO","date":"","category": "Accessories","function_owner": "Horizontal","inventoryStatus": "INSTOCK","rating": 5,"estimation_type":"HC","q1":1, "q2":0.25, "q3":0.5, "q4":1},
    {"id": "1001","features": "Triage/CI","function": "Integration", "feature_owner":"Aravind","domain":"Linux Driver","description": "Product Description","image": "black-watch.jpg","status": "ON","mode":"Medium", "milestone":"A1","date":"","category": "Accessories","function_owner": "Horizontal","inventoryStatus": "INSTOCK","rating": 4, "estimation_type":"HC","q1":1, "q2":0.25, "q3":0.5, "q4":1},
    {"id": "1002","features": "Kernel","function": "Kernel","feature_owner":"Paul Mei","domain":"Linux Driver","description": "Product Description","image": "blue-band.jpg","status": "ON","mode":"Medium", "milestone":"PRQ","date":"","category": "Fitness","function_owner": "Validation","inventoryStatus": "LOWSTOCK","rating": 3, "estimation_type":"HC","q1":1, "q2":0.25, "q3":0.5, "q4":1},
    {"id": "1003","features": "Integration","function": "Integration","feature_owner":"Aravind","domain":"Windows Server","description": "Product Description","image": "blue-t-shirt.jpg","status": "ON","mode":"Medium", "milestone":"ES","date":"","category": "Clothing","function_owner": "Validation","inventoryStatus": "INSTOCK","rating": 5,"estimation_type":"HC","q1":1, "q2":0.25, "q3":0.5, "q4":1},
    {"id": "1004","features": "Triage/CI","function": "Integration","feature_owner":"Aravind","domain":"Windows Server","description": "Product Description","image": "bracelet.jpg","status": "ON","mode":"Medium", "milestone":"A0","date":"","category": "Accessories","function_owner": "Validation","inventoryStatus": "INSTOCK","rating": 4,"estimation_type":"HC","q1":1, "q2":0.25, "q3":0.5, "q4":1},
    {"id": "1005","features": "Q&R","function": "Core Team","feature_owner":"Ravi","domain":"Core Team","description": "Product Description","image": "brown-purse.jpg","status": "ON","mode":"Medium","milestone":"B0","date":"","category": "Accessories","function_owner": "Validation","inventoryStatus": "OUTOFSTOCK","rating": 4,"estimation_type":"HC","q1":1, "q2":0.25, "q3":0.5, "q4":1},
    {"id": "1006","features": "Remote Board Farm HC","function": "ADA","feature_owner":"Dinesh","domain":"ADA","description": "Product Description","image": "chakra-bracelet.jpg","status": "ON","mode":"Medium","milestone":"Alpha","date":"","category": "Accessories","function_owner": "Development","inventoryStatus": "LOWSTOCK","rating": 3,"estimation_type":"BTI","q1":1, "q2":0.25, "q3":0.5, "q4":1},
    {"id": "1007","features": "DevOps HC - Windows Server","function": "ADA","feature_owner":"Dinesh","domain":"ADA","description": "Product Description","image": "galaxy-earrings.jpg","status": "ON","mode":"Medium","milestone":"Beta","date":"","category": "Accessories","function_owner": "Development","inventoryStatus": "INSTOCK","rating": 5,"estimation_type":"BTI","q1":1, "q2":0.25, "q3":0.5, "q4":1},
    {"id": "1008","features": "Automation Framework HC - Yocto","function": "ADA","feature_owner":"Dinesh","domain":"ADA","description": "Product Description","image": "game-controller.jpg","status": "ON","mode":"Medium","milestone":"PV","date":"","category": "Electronics","function_owner":"Development" ,"inventoryStatus": "LOWSTOCK","rating": 4,"estimation_type":"BTI","q1":1, "q2":0.25, "q3":0.5, "q4":1},
    {"id": "1009","features": "Automation Framework HC - Windows Server","function": "ADA","feature_owner":"Dinesh","domain":"ADA","description": "Product Description","image": "gaming-set.jpg","status": "ON","mode":"Medium","milestone":"PO","date":"","category": "Electronics","function_owner": "Development","inventoryStatus": "INSTOCK","rating": 3,"estimation_type":"BTI","q1":1, "q2":0.25, "q3":0.5, "q4":1}
]

export const SummaryData = [
    {
        'id':1,
        'models':'SW-Development',
        'medium_modify':'$3,386',
        'heavy_modify':'$7,159'
    },
    {
        'id':2,
        'models':'SW-Validation',
        'medium_modify':'$4,003',
        'heavy_modify':'$6,247'
    },
    {
        'id':3,
        'models':'SW-Horizontal',
        'medium_modify':'$1,737',
        'heavy_modify':'$2,826'
    },
]

export const SummaryColumns = [
    {
        field: "models", header: "Models" ,
    },
    {
        field: "medium_modify", header: "Medium Modify" ,
    },
    {
        field: "heavy_modify", header: "Heavy Modify" ,
    },
]