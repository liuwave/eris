/* Create an array of the own enumerable property names of object.
 *
 * |Name  |Type  |Desc                   |
 * |------|------|-----------------------|
 * |obj   |object|Object to query        |
 * |return|array |Array of property names|
 * 
 * ```javascript
 * keys({a: 1}); // -> ['a']
 * ```
 */

_('has');

exports = Object.keys || function (obj)
{
    var ret = [], key;

    for (key in obj)
    {
        if (has(obj, key)) ret.push(key);
    }

    return ret;
};