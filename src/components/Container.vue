<template>
    <div>
        <h3>Container!</h3>
        <Parent />
    </div>
</template>
<script>
import Parent from './Parent'
export default {
    name: 'Container',
    components: {Parent}
}
</script>