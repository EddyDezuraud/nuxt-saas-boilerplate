<template>
    <div class="effect-light">
        <div class="effect-light-el"></div>
        <div class="effect-light-el effect-light-el2"></div>
    </div>
</template>    

<style>
.effect-light {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    pointer-events: none;
    filter: blur(80px)
}

.effect-light-el {
    position: relative;
    flex: 1;
}

.effect-light-el::before {
    position: absolute;
    content: '';
    width: 100px;
    height: 120%;
    top: -20%;
    right: 20%;
    background: linear-gradient(to bottom, #FFFFFF35, #FFFFFF00);
    transform: rotate(-45deg);
}

.effect-light-el2::before {
    transform: rotate(45deg);
    right: auto;
    left: 20%;
}

/* .effect-light-el2 {
    background: linear-gradient(-45deg, #FFFFFF00, #FFFFFF00, #FFFFFF10, #FFFFFF00, #FFFFFF00);
} */
</style>