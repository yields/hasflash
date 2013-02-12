
# hasflash

  Whether or not the browser has flash plugin enabled.

## Installation

    $ component install yields/hasflash

## API

#### hasflash()

checks the navigator plugins, navigator mime types and
then tries to construct a new `ActiveXObject` with `ShockwaveFlash`.

if all above fail the function returns `false`.

```javascript
hasflash();
// > boolean
```


## License

  MIT
