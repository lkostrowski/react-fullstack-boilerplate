const serverConfigMap = {
};

const clientConfigMap = {
};

module.exports = { serverConfigMap, clientConfigMap };

module.exports = typeof window !== 'undefined' ? window.envConfig : serverConfigMap;

