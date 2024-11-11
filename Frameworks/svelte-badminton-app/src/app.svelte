<script>
    //For any JavaScript Logic
</script>

<link href="./AJB-Icon.svg" rel="icon" type="image/svg+xml"/>
<header class="svg-container">
    <img alt="Logo" src="./logo-SVG.svg">
</header>

<nav class="button-container">
    <button aria-label="Numbers" id="numbers">Numbers</button>
    <button aria-label="Payment" id="payment">Payment</button>
    <button aria-label="Admin" id="admin">Admin</button>
</nav>

<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
    }

    .svg-container {
        display: flex;
        align-content: center;
        justify-content: center;
        width: 150px;
        border: 2px;
        padding: 10px;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 20px;
    }

    .svg-container svg,
    .svg-container img {
        width: 100%;
        height: auto;
    }

    .button-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    button {
        width: 173px;
        padding: 10px 20px;
        font-size: 16px;
        font-family: 'Ubuntu', sans-serif;
        cursor: pointer;
        background-color: #f0f0f0;
        color: black;
        border: none;
        border-radius: 5px;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #d50032;
        color: white;
    }
</style>