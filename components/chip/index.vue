<template>
    <div class="chip">
        <div class="chip-inner">
            <span class="chip-el">
                <slot></slot>
            </span>
        </div>
    </div>
</template>

<style>
.chip {
    display: inline-flex;
    border-radius: 500px;
    position: relative;
    background: linear-gradient(to bottom, #ffffff05, #ffffff15);
    padding: 1px;
}

.chip-inner {
    background: #141718;
    border-radius: 500px;
}

.chip-el {
    display: block;
    border-radius: 500px;
    background: linear-gradient(#ffffff05, #ffffff00);
    padding: 10px 24px;
}
</style>