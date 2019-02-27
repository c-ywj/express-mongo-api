module.exports = {
    // Database connection information 
    'database_cloud': 'mongodb://cy:bcit@meanday4-shard-00-00-co2i5.mongodb.net:27017,meanday4-shard-00-01-co2i5.mongodb.net:27017,meanday4-shard-00-02-co2i5.mongodb.net:27017/test?ssl=true&replicaSet=MeanDay4-shard-0&authSource=admin&retryWrites=true', 
    'database': 'none', 
    // Setting port for server 
    'port': process.env.PORT || 3000
}; 