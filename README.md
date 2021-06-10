# capacitor-mapbox-navigation

This plugin is one for mapbox navigation in ionic capacitor.

## Install

```bash
npm install capacitor-mapbox-navigation
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`show(...)`](#show)
* [`history()`](#history)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => any
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>any</code>

--------------------


### show(...)

```typescript
show(options: MapboxNavOptions) => any
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#mapboxnavoptions">MapboxNavOptions</a></code> |

**Returns:** <code>any</code>

--------------------


### history()

```typescript
history() => any
```

**Returns:** <code>any</code>

--------------------


### Interfaces


#### MapboxNavOptions

| Prop             | Type                 |
| ---------------- | -------------------- |
| **`waypoints`**  | <code>{}</code>      |
| **`mapType`**    | <code>string</code>  |
| **`simulating`** | <code>boolean</code> |
| **`startPos`**   | <code>number</code>  |


#### LocationOption

| Prop           | Type                          |
| -------------- | ----------------------------- |
| **`_id`**      | <code>string</code>           |
| **`name`**     | <code>string</code>           |
| **`location`** | <code>[number, number]</code> |

</docgen-api>
