# plop-pack-package-json
I created this script for a Monorepo. We have a component generator, and we needed to find a way to add the new component to the main dependencies.

## Installation
```
npm install --save plop-pack-package-json
```

- **addToPkgJSON** - adds a package to a dependency


## Usage
In your main plopfile
```

module.exports = function(plop) {
    // add this line to plopfile.js
    plop.load("plop-pack-package-json");
};
```

Valid configuration options:

```.js
{
    type: 'addToPkgJSON', // tell plop to use the custom action.
    JSONFile: path.join('packages', 'main', 'package.json'), // the file to edit
    newPackageName: '@entp/new-component', // name of the package to add
    newPackageVersion: "^1.0.0" // version of the package to add
}
```