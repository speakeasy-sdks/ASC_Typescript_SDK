<!-- Start SDK Example Usage -->
```typescript
import { Asc } from "asc";

(async () => {
    const sdk = new Asc();

    const res = await sdk.pets.createPets();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->