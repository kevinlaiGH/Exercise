A few tricks I have learnt:

I can make the button color change when user hover the mouse tp the areas

```
.calc-button:hover {
  background-color: #ebebeb;
}
```

Tips to build a calculator:

1.  Each function should do one thing only!

Thought Process (pseudo code):

For buttonClick function: (easier to filter down the value if start with symbol, our ultimate goal is to get number!)
Is the value number or not?

## 1st case

If it is not a number, it is a symbol!
isNaN means "Not a Number", parseInt(value) will try to convert whatever inside it into a Number

## 2nd case

Following from 1st case, then it must be a number (since it is not a symbol)

1.  For handleNumber function: `buffer = value;`
    buffer is just 0 at the start, it set to whatever number you click.
2.  You can add things (accumulate) `buffer += value;`
3.  Otherwise, something changes we rerender
