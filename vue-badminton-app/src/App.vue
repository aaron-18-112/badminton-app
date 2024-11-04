<template>
  <div>
    <link href="./AJB-Icon.svg" rel="icon" type="image/svg+xml"/>
    <header class="svg-container">
      <img alt="Logo" src="/logo-SVG.svg"/>
    </header>

    <nav class="button-container">
      <button aria-label="Numbers" @click="handleButtonClick('numbers')">Numbers</button>
      <button aria-label="Payment" @click="handleButtonClick('payment')">Payment</button>
      <button aria-label="Admin" @click="handleButtonClick('admin')">Admin</button>
    </nav>
  </div>
</template>
