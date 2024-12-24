export class ScottState {
    value = $state(0);

    up() {
        this.value++;
    }

    down() {
        this.value--;
    }
}


export function createState() {
    let value = $state(0);

    function up() {
        value++;
    }

    function down() {
        value--;
    }

    return {
        get value() {
            return value;
        },
        set value(newValue) {
            value = newValue;
        },
        up,
        down
    }
}