# List of Supported Libraries

The following pre-existing libraries can be selected for use in the script editor of the [Function Node](./function-node.md).

* [json](#json)
* [enum](#enum)
* **Numerical Libraries**: [numPy](#numpy), [pandas](#pandas), [collections](#collections), [math](#math), [cmath](#cmath), [statistics](#statistics), and [random](#statistics).
* **String Manipulation Libraries**: [re](#re) and [textwrap](#textwrap).
* **Date-time Libraries**: [datetime](#datetime), [time](#time), and [calendar](#calendar).
* [Itertools](#itertools)

<hr>

The libraries mentioned above are imported and made available in the function node in the following formats:

```
import json
import numpy
import scipy
import pandas
import collections
import math
import cmath
import statistics
import random
import enum
import re
import textwrap
import datetime
import time
import calendar
import itertools
```
<hr>

## Functions of Supported Libraries

### json

```
  "json": [
        "JSONDecodeError",
        "JSONDecoder",
        "JSONEncoder",
        "dumps",
        "loads"
    ]
```

### enum

```
"enum": [
        "DynamicClassAttribute",
        "Enum",
        "Flag",
        "IntEnum",
        "IntFlag"
    ]
```
<hr>

## Numerical Libraries

### numPy

```
"numpy": [
        "abs",
        "absolute",
        "add",
        "all",
        "allclose",
        "alltrue",
        "amax",
        "amin",
        "angle",
        "any",
        "append",
        "apply_along_axis",
        "apply_over_axes",
        "arange",
        "arccos",
        "arccosh",
        "arcsin",
        "arcsinh",
        "arctan",
        "arctan2",
        "arctanh",
        "argmax",
        "argmin",
        "argpartition",
        "argsort",
        "argwhere",
        "around",
        "array",
        "array2string",
        "array_equal",
        "array_equiv",
        "array_repr",
        "array_split",
        "array_str",
        "asanyarray",
        "asarray",
        "asarray_chkfinite",
        "ascontiguousarray",
        "asfarray",
        "asfortranarray",
        "asmatrix",
        "atleast_1d",
        "atleast_2d",
        "atleast_3d",
        "average",
        "bartlett",
        "base_repr",
        "binary_repr",
        "bincount",
        "bitwise_and",
        "bitwise_not",
        "bitwise_or",
        "bitwise_xor",
        "blackman",
        "block",
        "bmat",
        "bool_",
        "broadcast",
        "broadcast_arrays",
        "broadcast_shapes",
        "broadcast_to",
        "busday_count",
        "busday_offset",
        "busdaycalendar",
        "byte",
        "byte_bounds",
        "bytes_",
        "can_cast",
        "cbrt",
        "cdouble",
        "ceil",
        "cfloat",
        "character",
        "chararray",
        "choose",
        "clip",
        "clongdouble",
        "clongfloat",
        "column_stack",
        "common_type",
        "complex128",
        "complex256",
        "complex64",
        "complexfloating",
        "compress",
        "concatenate",
        "conj",
        "conjugate",
        "convolve",
        "copy",
        "copysign",
        "copyto",
        "corrcoef",
        "correlate",
        "cos",
        "cosh",
        "count_nonzero",
        "cov",
        "cross",
        "csingle",
        "cumprod",
        "cumsum",
        "datetime64",
        "datetime_as_string",
        "datetime_data",
        "deg2rad",
        "degrees",
        "delete",
        "deprecate",
        "deprecate_with_doc",
        "diag",
        "diag_indices",
        "diag_indices_from",
        "diagflat",
        "diagonal",
        "diff",
        "digitize",
        "divide",
        "divmod",
        "dot",
        "double",
        "dsplit",
        "dstack",
        "dtype",
        "ediff1d",
        "einsum",
        "einsum_path",
        "empty",
        "empty_like",
        "equal",
        "errstate",
        "exp",
        "exp2",
        "expand_dims",
        "expm1",
        "extract",
        "eye",
        "fabs",
        "fill_diagonal",
        "find_common_type",
        "finfo",
        "fix",
        "flatiter",
        "flatnonzero",
        "flip",
        "fliplr",
        "flipud",
        "float128",
        "float16",
        "float32",
        "float64",
        "float_power",
        "floating",
        "floor",
        "floor_divide",
        "fmax",
        "fmin",
        "fmod",
        "format_float_positional",
        "format_float_scientific",
        "frexp",
        "fromfunction",
        "full",
        "full_like",
        "gcd",
        "geomspace",
        "get_printoptions",
        "geterr",
        "geterrcall",
        "geterrobj",
        "gradient",
        "greater",
        "greater_equal",
        "half",
        "hamming",
        "hanning",
        "heaviside",
        "histogram",
        "histogram2d",
        "histogram_bin_edges",
        "histogramdd",
        "hsplit",
        "hstack",
        "hypot",
        "i0",
        "identity",
        "iinfo",
        "imag",
        "in1d",
        "indices",
        "inexact",
        "inner",
        "insert",
        "int16",
        "int32",
        "int64",
        "int8",
        "int_",
        "intc",
        "integer",
        "interp",
        "intersect1d",
        "intp",
        "invert",
        "is_busday",
        "isclose",
        "iscomplex",
        "iscomplexobj",
        "isfinite",
        "isfortran",
        "isin",
        "isinf",
        "isnan",
        "isnat",
        "isneginf",
        "isposinf",
        "isreal",
        "isrealobj",
        "isscalar",
        "issctype",
        "issubdtype",
        "issubsctype",
        "iterable",
        "kaiser",
        "kron",
        "lcm",
        "ldexp",
        "left_shift",
        "less",
        "less_equal",
        "lexsort",
        "linspace",
        "log",
        "log10",
        "log1p",
        "log2",
        "logaddexp",
        "logaddexp2",
        "logical_and",
        "logical_not",
        "logical_or",
        "logical_xor",
        "logspace",
        "longcomplex",
        "longdouble",
        "longfloat",
        "longlong",
        "mask_indices",
        "mat",
        "matmul",
        "matrix",
        "max",
        "maximum",
        "maximum_sctype",
        "may_share_memory",
        "mean",
        "median",
        "meshgrid",
        "min",
        "min_scalar_type",
        "minimum",
        "mintypecode",
        "mod",
        "modf",
        "moveaxis",
        "msort",
        "multiply",
        "nan_to_num",
        "nanargmax",
        "nanargmin",
        "nancumprod",
        "nancumsum",
        "nanmax",
        "nanmean",
        "nanmedian",
        "nanmin",
        "nanpercentile",
        "nanprod",
        "nanquantile",
        "nanstd",
        "nansum",
        "nanvar",
        "ndarray",
        "ndenumerate",
        "ndim",
        "ndindex",
        "nditer",
        "negative",
        "nested_iters",
        "nextafter",
        "nonzero",
        "not_equal",
        "number",
        "obj2sctype",
        "ones",
        "ones_like",
        "outer",
        "packbits",
        "pad",
        "partition",
        "percentile",
        "piecewise",
        "place",
        "poly",
        "poly1d",
        "polyadd",
        "polyder",
        "polydiv",
        "polyfit",
        "polyint",
        "polymul",
        "polysub",
        "polyval",
        "positive",
        "power",
        "printoptions",
        "prod",
        "product",
        "promote_types",
        "ptp",
        "put",
        "put_along_axis",
        "putmask",
        "quantile",
        "rad2deg",
        "radians",
        "ravel",
        "ravel_multi_index",
        "real",
        "real_if_close",
        "recarray",
        "reciprocal",
        "record",
        "remainder",
        "repeat",
        "require",
        "reshape",
        "resize",
        "result_type",
        "right_shift",
        "rint",
        "roll",
        "rollaxis",
        "roots",
        "rot90",
        "round",
        "row_stack",
        "sctype2char",
        "searchsorted",
        "select",
        "set_printoptions",
        "set_string_function",
        "setbufsize",
        "setdiff1d",
        "seterr",
        "seterrcall",
        "setxor1d",
        "shape",
        "shares_memory",
        "short",
        "sign",
        "signbit",
        "signedinteger",
        "sin",
        "sinc",
        "single",
        "sinh",
        "size",
        "sort",
        "sort_complex",
        "spacing",
        "split",
        "sqrt",
        "square",
        "squeeze",
        "std",
        "subtract",
        "sum",
        "swapaxes",
        "take",
        "take_along_axis",
        "tan",
        "tanh",
        "tensordot",
        "tile",
        "timedelta64",
        "trace",
        "transpose",
        "trapz",
        "tri",
        "tril",
        "tril_indices",
        "tril_indices_from",
        "trim_zeros",
        "triu",
        "triu_indices",
        "triu_indices_from",
        "true_divide",
        "trunc",
        "typename",
        "ubyte",
        "uint",
        "uint16",
        "uint32",
        "uint64",
        "uint8",
        "uintc",
        "uintp",
        "ulonglong",
        "union1d",
        "unique",
        "unpackbits",
        "unravel_index",
        "unwrap",
        "ushort",
        "vander",
        "var",
        "vdot",
        "vectorize",
        "vsplit",
        "vstack",
        "where",
        "who",
        "zeros",
        "zeros_like"
    ]

```
<a href="https://numpy.org/doc/stable/reference/index.html#reference">Learn more</a>.

### pandas

```
"pandas": [
        "BooleanDtype",
        "Categorical",
        "CategoricalDtype",
        "CategoricalIndex",
        "DataFrame",
        "DateOffset",
        "DatetimeIndex",
        "DatetimeTZDtype",
        "Flags",
        "Float32Dtype",
        "Float64Dtype",
        "Grouper",
        "Index",
        "Int16Dtype",
        "Int32Dtype",
        "Int64Dtype",
        "Int8Dtype",
        "Interval",
        "IntervalDtype",
        "IntervalIndex",
        "MultiIndex",
        "NamedAgg",
        "Period",
        "PeriodDtype",
        "RangeIndex",
        "Series",
        "SparseDtype",
        "StringDtype",
        "Timedelta",
        "TimedeltaIndex",
        "Timestamp",
        "UInt16Dtype",
        "UInt32Dtype",
        "UInt64Dtype",
        "UInt8Dtype",
        "array",
        "bdate_range",
        "concat",
        "cut",
        "date_range",
        "describe_option",
        "eval",
        "factorize",
        "from_dummies",
        "get_dummies",
        "get_option",
        "infer_freq",
        "interval_range",
        "isna",
        "isnull",
        "json_normalize",
        "lreshape",
        "melt",
        "merge",
        "merge_asof",
        "merge_ordered",
        "notna",
        "notnull",
        "option_context",
        "period_range",
        "qcut",
        "reset_option",
        "set_eng_float_format",
        "set_option",
        "test",
        "timedelta_range",
        "to_datetime",
        "to_numeric",
        "to_timedelta",
        "unique",
        "value_counts",
        "wide_to_long"
    ]
```
<a href="https://pandas.pydata.org/docs/reference/index.html">Learn more</a>.

### collections

```
"collections": [
        "ChainMap",
        "Counter",
        "OrderedDict",
        "UserDict",
        "UserList",
        "UserString",
        "defaultdict",
        "deque",
        "namedtuple"
    ]
```
<a href="https://docs.python.org/3/library/collections.html">Learn more</a>.

### math

```
"math": [
        "acos",
        "acosh",
        "asin",
        "asinh",
        "atan",
        "atan2",
        "atanh",
        "ceil",
        "comb",
        "copysign",
        "cos",
        "cosh",
        "degrees",
        "dist",
        "erf",
        "erfc",
        "exp",
        "expm1",
        "fabs",
        "factorial",
        "floor",
        "fmod",
        "frexp",
        "fsum",
        "gamma",
        "gcd",
        "hypot",
        "isclose",
        "isfinite",
        "isinf",
        "isnan",
        "isqrt",
        "ldexp",
        "lgamma",
        "log",
        "log10",
        "log1p",
        "log2",
        "modf",
        "perm",
        "pow",
        "prod",
        "radians",
        "remainder",
        "sin",
        "sinh",
        "sqrt",
        "tan",
        "tanh",
        "trunc"
    ]
```
<a href="https://docs.python.org/3/library/math.html">Learn more</a>.

### cmath

```
"cmath": [
        "acos",
        "acosh",
        "asin",
        "asinh",
        "atan",
        "atanh",
        "cos",
        "cosh",
        "exp",
        "isclose",
        "isfinite",
        "isinf",
        "isnan",
        "log",
        "log10",
        "phase",
        "polar",
        "rect",
        "sin",
        "sinh",
        "sqrt",
        "tan",
        "tanh"
    ]
```
<a href="https://docs.python.org/3/library/cmath.html">Learn more</a>.

### statistics

```
"statistics": [
        "Counter",
        "Decimal",
        "Fraction",
        "NormalDist"
    ]
```
<a href="https://docs.python.org/3/library/statistics.html">Learn more</a>.

### random

```
 "random": [
        "Random",
        "SystemRandom",
        "betavariate",
        "choice",
        "choices",
        "expovariate",
        "gammavariate",
        "gauss",
        "getrandbits",
        "getstate",
        "lognormvariate",
        "normalvariate",
        "paretovariate",
        "randbytes",
        "randint",
        "random",
        "randrange",
        "sample",
        "seed",
        "setstate",
        "shuffle",
        "triangular",
        "uniform",
        "vonmisesvariate",
        "weibullvariate"
    ]
```
<a href="https://docs.python.org/3/library/random.html">Learn more</a>.

<hr>

## String Manipulation Libraries

### re

```
 "re": [
        "compile",
        "error",
        "escape",
        "findall",
        "finditer",
        "fullmatch",
        "match",
        "purge",
        "search",
        "split",
        "sub",
        "subn",
        "template"
    ]
```
<a href="https://docs.python.org/3/library/re.html">Learn more</a>.

### textwrap

```
 "textwrap": [
        "TextWrapper",
        "dedent",
        "fill",
        "indent",
        "shorten",
        "wrap"
    ]
```
<a href="https://docs.python.org/3/library/textwrap.html">Learn more</a>.

<hr>

## Date-time Libraries

### datetime

```
"datetime": [
        "date",
        "datetime",
        "time",
        "timedelta",
        "timezone",
        "tzinfo"
    ]
```
<a href="https://docs.python.org/3/library/datetime.html">Learn more</a>.

### time

```
 "time": [
        "asctime",
        "clock_gettime",
        "clock_gettime_ns",
        "ctime",
        "gmtime",
        "localtime",
        "mktime",
        "monotonic",
        "monotonic_ns",
        "perf_counter",
        "perf_counter_ns",
        "process_time",
        "process_time_ns",
        "strftime",
        "strptime",
        "struct_time",
        "time",
        "time_ns",
        "tzset"
    ]
```
<a href="https://docs.python.org/3/library/time.html">Learn more</a>.

### calendar

```
 "calendar": [
        "Calendar",
        "HTMLCalendar",
        "IllegalMonthError",
        "IllegalWeekdayError",
        "LocaleHTMLCalendar",
        "LocaleTextCalendar",
        "TextCalendar",
        "calendar",
        "different_locale",
        "firstweekday",
        "format",
        "formatstring",
        "isleap",
        "leapdays",
        "month",
        "monthcalendar",
        "monthrange",
        "prcal",
        "prmonth",
        "setfirstweekday",
        "timegm",
        "weekday",
        "weekheader"
    ]
```
<a href="https://docs.python.org/3/library/calendar.html">Learn more</a>.

<hr>

## Itertools

```
"itertools": [

        "accumulate",
        "chain",
        "combinations",
        "combinations_with_replacement",
        "compress",
        "count",
        "cycle",
        "dropwhile",
        "filterfalse",
        "groupby",
        "islice",
        "permutations",
        "product",
        "repeat",
        "starmap",
        "takewhile",
        "tee",
        "zip_longest"
    ]
```
<a href="https://docs.python.org/3/library/itertools.html">Learn more</a>.

<hr>
