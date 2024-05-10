<template>
    <div class="wrapper">
        <v-btn>Action</v-btn>
        <h1>Creation</h1>
        <pre>{{ creation }}</pre>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            creation: {
                TheAll: {
                    NickName: 'The Spirit',
                    Reality: 'Divine Geometry',
                    State: 'The Ineffable, The immeasurable',
                    features: [
                        'Outside of realms of being and time',
                        'Receives nothing from anything.',
                        'Neither immense nor infinitesimal'
                    ],
                    SelfActualizations: {
                        TheOne: {
                            NickName: 'The Father',
                            Reality: 'Substantial Creator',
                            State: 'The Father is surrounded by light.',
                            Features: [
                                'Chief of all Realms, Producing all Realms',
                                'Producing Light and Life',
                                'Producing knowledge',
                                'Producing Goodness and Mercy',
                                'His realm is eternal, peaceful, silent, resting, before everything.',
                                'He is the head of every realm sustaining each of them through goodness.'
                            ],
                            Event: 'He apprehends himself in that light',
                            Then: 'His self-aware thought (ennoia) came into being.',
                            Therefore: 'This, then, is the first of the powers, prior to everything.',
                            ForeThought: {},

                        }
                    },
            }
            }
        }
    }
}
</script>

<style>
body {
    padding: 0;
    margin: 0;
    background-color: #111;
    color: #ccc;
}
.wrapper {
    padding: 20px;
}
</style>
