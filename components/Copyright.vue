<template>
    <div class="copyright">
        Copyright &copy; allthesespices.com. All Rights Reserved
    </div>
</template>
<script>
    export default {
        name: 'Copyright',
    }
</script>
<style lang="scss" scoped>
.copyright {
    font-size: .75rem;

    @media(min-width: 768px) {
        font-size: 1rem;
    }
}
</style>