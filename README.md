# react-data-tags

A small wrapper to add data-tags to your react components

## Usage

#### Option 1: Wrapping Component

Input:

```jsx
<DataTags label="foo" value="bar">
  <div className="element-to-add-tags-to" >{...}</div>
</DataTags>
```

Output:

```html
<div class="element-to-add tags to" data-label="foo" data-value="bar">...</div>
```

_this also works for multiple children_

Input:

```jsx
<DataTags label="foo" value="bar">
  <div className="element-to-add-tags-to-1" >{...}</div>
  <div className="element-to-add-tags-to-2" >{...}</div>

</DataTags>
```

Output:

```html
<div class="element-to-add-tags-to-1" data-label="foo" data-value="bar">
  ...
</div>
<div class="element-to-add-tags-to-2" data-label="foo" data-value="bar">
  ...
</div>
```

#### Option 2: HOC Component

Input:

```jsx
import { Button } from './button'
const ButtonWithTags = withDataTags(Button, {
  tags: { foo: 'bar', anotherTag: 'val2' },
})

;<ButtonWithTags
  {...buttonProps}
  /* The dataTags prop will overwrite the tags from the HOC */
  dataTags={{ anotherTag: 'value2' }}
>
  ButtonContent
</ButtonWithTags>
```

Output:

```html
<button data-another-tag="value2" data-foo="bar">ButtonContent</button>
```

_this also works for multiple children_
