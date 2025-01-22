const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const cors = require("cors");

module.exports = merge(common, {
    mode: "development", 
    devtool: "inline-source-map", 
    devServer: {
        static: "./dist", 
        setupMiddlewares: (middleware, devServer) => {
            if (!devServer) {
                throw new Error("webpack-dev-server is not defined");
            }

            devServer.app.use(cors());

            return middleware;
        }
    }
});