require('react');
require('react-dom');
require('react-redux');
require('redux');

// add other libraries here as well

// for dev
if (process.env.NODE_ENV !== 'production') {
    require('webpack-dev-server/client');
    // require('webpack/hot/only-dev-server');
    require('react-hot-loader');
    require('redux-devtools');
    require('redux-devtools-log-monitor');
    require('redux-devtools-dock-monitor');
}