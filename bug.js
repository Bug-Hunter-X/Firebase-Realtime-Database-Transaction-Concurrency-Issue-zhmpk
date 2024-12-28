The following code snippet demonstrates a potential issue when using Firebase Realtime Database transactions and optimistic locking: 

```javascript
firebase.database().ref('myData').transaction(function(currentData) {
  if (currentData === null) {
    return {value: 1};
  } else {
    return {value: currentData.value + 1};
  }
});
```

This approach can fail under high concurrency.  If multiple clients attempt to increment `myData` simultaneously, some increments might be lost due to the optimistic locking mechanism.  The transaction might not correctly reflect the sum of all intended increments.