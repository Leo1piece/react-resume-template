# 使用官方的Node.js镜像作为基础镜像
FROM node:18

# 设置工作目录
WORKDIR /usr/src/app

# 将package.json和package-lock.json复制到工作目录
COPY package*.json ./

# 安装应用依赖
RUN yarn install

# 复制本地代码到容器中
COPY . .

# 将应用编译
RUN yarn build

# 声明运行时容器提供服务的端口
EXPOSE 3000

# 定义容器启动时运行的命令
CMD ["yarn", "start"]
