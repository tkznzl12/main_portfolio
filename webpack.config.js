const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const mode = process.env.NODE_ENV || "development";
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode,
  entry: {
    // 최종 index.html에서 사용할 js 시작점은 app.js 파일인데, 이 파일은 src/index.tsx로부터 빌드된다.
    app: path.join(__dirname, "src", "index.tsx"),
  },
  output: {
    filename: "[name].js", // [app].js
    path: path.resolve(__dirname, "dist"), // 빌드하면 dist폴더가 생기고 그 안에 번들링 결과물인 [app].js가 들어있다.
  },
  resolve: {
    alias: {
      gsap: path.resolve(__dirname, "node_modules/gsap"),
    },
    extensions: [".jsx", ".js", ".tsx", ".ts"], // 웹팩에서 처리해주는 확장자들
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // tsx나 ts파일을 발견하면
        use: "ts-loader", // 해당 loader를 통해서 ts를 js로 변환한다.
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{ loader: "file-loader" }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 빌드시 html에 값을 전달, html 변경 & html 코드 압축(공백, 주석제거) & webpack으로 빌드한 번들 파일을 자동으로 html에 추가
      template: "./src/index.html", // index.html 파일을 템플릿으로 쓴다.
      templateParameters: {
        // 해당 템플릿에 전달하는 인자들
        env: process.env.NODE_ENV === "production" ? "" : "[DEV]",
      },
      minify:
        process.env.NODE_ENV === "production" // 프로덕션 모드일경우 공백,주석 제거
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
    new CleanWebpackPlugin(), // 빌드때마다 dist 폴더 클린업
  ],
};
