# Full-Screen Quad

This module is useful to get vertices for a "full-screen quad".  This is typically used for full-screen fragment shaders.
You can pass the number of dimensions ( 2 - 4 ) that you wish to be outputted ( different use-cases may prefer different
dimensionality ).

# Example useage

```javascript
import FullScreenQuad from 'full-screen-quad'

const fsq = FullScreenQuad(2)

// output is a float32array of 2d vertices for your full-screen quad
```
