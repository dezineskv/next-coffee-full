    // try {
    //     const response = await fetch(`/api/products/${id}`);
    //     if (!response.ok) {
    //         // Handle non-200 responses (e.g., 404, 500)
    //         const errorText = await response.text(); // Get raw response for debugging
    //         throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    //     }
    //     const data = await response.json();
    //     setProduct(data);
    // } catch (error) {
    //     console.error("Error fetching product:", error);
    //     // Display an error message to the user
    // }