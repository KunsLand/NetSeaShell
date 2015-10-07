function time2String(param1) 
{
    var _loc_8 = NaN;
    var _loc_2 = new Array(8);
    var _loc_4 = "0123456789abcdef";
    var _loc_5 = _loc_4.split("");
    var _loc_6 = 0;
    while (_loc_6 < 8)
    {
        
        _loc_8 = param1 >>> 28 - _loc_6 % 8 * 4 & 15;
        _loc_2[_loc_6] = _loc_5[_loc_8];
        _loc_6 = _loc_6 + 1;
    }
    var _loc_7 = _loc_2.join("");
    return _loc_7;
}// end function

function add(param1, param2) 
{
    var _loc_3 = 0;
    while (_loc_3 < param2)
    {
        
        param1 = param1 + getCharFromAscii(0);
        _loc_3 = _loc_3 + 1;
    }
    return param1;
}// end function

function Str2Hex(param1) 
{
    var _loc_7 = NaN;
    var _loc_8 = NaN;
    var _loc_2 = "0123456789abcdef";
    var _loc_3 = _loc_2.split("");
    var _loc_4 = param1.split("");
    var _loc_5 = new Array(2 * _loc_4.length + 1);
    var _loc_6 = _loc_4.length;
    var _loc_9 = 0;
    while (_loc_9 < _loc_6)
    {
        
        if (_loc_9 < 8)
        {
            _loc_7 = _loc_4[_loc_9].charCodeAt(0) & 15;
            _loc_8 = _loc_4[_loc_9].charCodeAt(0) >>> 4 & 15;
            _loc_5[2 * _loc_9] = _loc_3[_loc_4[_loc_9].charCodeAt(0) & 15];
            _loc_5[2 * _loc_9 + 1] = _loc_3[_loc_4[_loc_9].charCodeAt(0) >>> 4 & 15];
        }
        else
        {
            _loc_5[2 * _loc_9] = _loc_3[Math.floor(Math.random() * 15)];
            _loc_5[2 * _loc_9 + 1] = _loc_3[Math.floor(Math.random() * 15)];
        }
        _loc_9++;
    }
    return _loc_5.join("");
}// end function

function getkey(param1)
{
    var _loc_5 = null;
    var _loc_6 = 0;
    var _loc_7 = 0;
    var _loc_2 = param1.split("");
    var _loc_3 = 0;
    var _loc_4 = 0;
    while (_loc_4 < _loc_2.length)
    {
        
        _loc_5 = _loc_2[_loc_4];
        _loc_6 = _loc_5.charCodeAt(0);
        _loc_7 = _loc_6 << _loc_4 % 4 * 8;
        _loc_3 = _loc_3 ^ _loc_7;
        _loc_4 = _loc_4 + 1;
    }
    return _loc_3;
}// end function

function getCharFromAscii(param1) 
{
    return String.fromCharCode(param1);
}// end function

function encrypt(param1, param2) 
{
    var _loc_5 = 0;
    var _loc_6 = 0;
    var _loc_7 = 0;
    var _loc_13 = 0;
    var _loc_14 = 0;
    var _loc_15 = 0;
    var _loc_16 = 0;
    var _loc_17 = 0;
    var _loc_18 = 0;
    var _loc_19 = 0;
    var _loc_20 = 0;
    var _loc_21 = 0;
    var _loc_22 = 0;
    var _loc_23 = 0;
    var _loc_24 = 0;
    var _loc_25 = 0;
    var _loc_26 = 0;
    var _loc_27 = 0;
    var _loc_28 = 0;
    var _loc_29 = 0;
    var _loc_30 = 0;
    var _loc_31 = 0;
    var _loc_32 = 0;
    var _loc_33 = 0;
    var _loc_34 = 0;
    var _loc_35 = 0;
    var _loc_36 = 0;
    var _loc_37 = 0;
    var _loc_38 = 0;
    var _loc_39 = 0;
    var _loc_40 = 0;
    var _loc_41 = 0;
    var _loc_3 = 16;
    var _loc_4 = getkey(param2);
    var _loc_8 = param1.split("");
    var _loc_9 = param2.split("");
    var _loc_10 = _loc_4;
    _loc_5 = _loc_10 << 8 | _loc_10 >>> 24;
    _loc_6 = _loc_10 << 16 | _loc_10 >>> 16;
    _loc_7 = _loc_10 << 24 | _loc_10 >>> 8;
    var _loc_11 = "";
    var _loc_12 = 0;
    while (_loc_12 + _loc_3 <= _loc_8.length)
    {
        
        _loc_13 = _loc_8[_loc_12].charCodeAt(0) << 0;
        _loc_14 = _loc_8[(_loc_12 + 1)].charCodeAt(0) << 8;
        _loc_15 = _loc_8[_loc_12 + 2].charCodeAt(0) << 16;
        _loc_16 = _loc_8[_loc_12 + 3].charCodeAt(0) << 24;
        _loc_17 = _loc_8[_loc_12 + 4].charCodeAt(0) << 0;
        _loc_18 = _loc_8[_loc_12 + 5].charCodeAt(0) << 8;
        _loc_19 = _loc_8[_loc_12 + 6].charCodeAt(0) << 16;
        _loc_20 = _loc_8[_loc_12 + 7].charCodeAt(0) << 24;
        _loc_21 = 0 | _loc_13 | _loc_14 | _loc_15 | _loc_16;
        _loc_22 = 0 | _loc_17 | _loc_18 | _loc_19 | _loc_20;
        _loc_23 = 0;
        _loc_24 = 0;
        while (_loc_24 < 32)
        {
            
            _loc_23 = _loc_23 + 2654435769;
            _loc_33 = (_loc_22 << 4) + _loc_4;
            _loc_34 = _loc_22 + _loc_23;
            _loc_35 = (_loc_22 >>> 5) + _loc_5;
            _loc_36 = _loc_33 ^ _loc_34 ^ _loc_35;
            _loc_21 = _loc_21 + _loc_36;
            _loc_37 = (_loc_21 << 4) + _loc_6;
            _loc_38 = _loc_21 + _loc_23;
            _loc_39 = _loc_21 >>> 5;
            _loc_40 = _loc_39 + _loc_7;
            _loc_41 = _loc_37 ^ _loc_38 ^ _loc_40;
            _loc_22 = _loc_22 + _loc_41;
            _loc_24++;
        }
        _loc_25 = _loc_21 >>> 0 & 255;
        _loc_26 = _loc_21 >>> 8 & 255;
        _loc_27 = _loc_21 >>> 16 & 255;
        _loc_28 = _loc_21 >>> 24 & 255;
        _loc_29 = _loc_22 >>> 0 & 255;
        _loc_30 = _loc_22 >>> 8 & 255;
        _loc_31 = _loc_22 >>> 16 & 255;
        _loc_32 = _loc_22 >>> 24 & 255;
        _loc_11 = _loc_11 + getCharFromAscii(_loc_21 >>> 0 & 255);
        _loc_11 = _loc_11 + getCharFromAscii(_loc_21 >>> 8 & 255);
        _loc_11 = _loc_11 + getCharFromAscii(_loc_21 >>> 16 & 255);
        _loc_11 = _loc_11 + getCharFromAscii(_loc_21 >>> 24 & 255);
        _loc_11 = _loc_11 + getCharFromAscii(_loc_22 >>> 0 & 255);
        _loc_11 = _loc_11 + getCharFromAscii(_loc_22 >>> 8 & 255);
        _loc_11 = _loc_11 + getCharFromAscii(_loc_22 >>> 16 & 255);
        _loc_11 = _loc_11 + getCharFromAscii(_loc_22 >>> 24 & 255);
        _loc_12 = _loc_12 + _loc_3;
    }
    _loc_11 = _loc_11 + param1.substr(8, 8);
    return _loc_11;
}// end function

function constructKey(param1) 
{
    var _loc_2 = time2String(param1);
    var _loc_3 = _loc_2.split("");
    if (_loc_3.length < 16)
    {
        _loc_2 = add(_loc_2, 16 - _loc_3.length);
    }
    var _loc_4 = "";
    var _loc_5 = "qqqqqww";
    if (_loc_5.length < 16)
    {
        _loc_5 = add(_loc_5, 16 - _loc_5.length);
    }
    _loc_4 = encrypt(_loc_2, _loc_5);
    _loc_4 = Str2Hex(_loc_4);
    return _loc_4;
}// end function