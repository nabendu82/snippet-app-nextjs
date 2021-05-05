module.exports = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.(js|ts)x?$/,
            use: ["@svgr/webpack"],
        });
        return config
    },
}