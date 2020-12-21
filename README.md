# Where's It At?

## Install node modules
```
npm install
```

### Run the app
```
node myapp/app.js
```

### To fix MySQL 8 caching_sha2_password issues
In a MySQL client:
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
FLUSH PRIVILEGES
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
