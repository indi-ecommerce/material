const path = require('path')
const sassTrue = require('sass-true')
const glob = require('glob')

describe('@indi/material', () => {
    const sassTestFiles = glob.sync(
        path.resolve(__dirname, '**/*.spec.scss')
    )
    const includePaths = [
        'node_modules',
    ];

    sassTestFiles.forEach(file =>
        sassTrue.runSass({
            file,
            includePaths,
        }, { describe, it })
    )
})
