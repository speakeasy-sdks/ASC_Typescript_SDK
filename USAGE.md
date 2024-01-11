<!-- Start SDK Example Usage [usage] -->
```typescript
import { Asc } from "asc";

async function run() {
    const sdk = new Asc();

    const res = await sdk.pets.createPets({
        id: 596804,
        name: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->