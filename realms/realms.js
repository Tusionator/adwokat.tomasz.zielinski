




var Realm = {
    props: {
    title: String,
    image: String,
    tmp: Array
    },
    template:
        `

<button class="col-12 col-sm-6 col-lg-4 realm ">
    <div class="realm-main">
        <div class="realm-front">
            <h1>{{title}}</h1>
        </div>
        <div class="realm-description">
            <h1>{{title}}</h1>
            <ul>
                <li v-for="item in tmp">
                    {{ item }}<br>
                </li>
            </ul>
        </div>
    </div>

</button>
  `
};
new Vue({
    el: '#zakres_praktyki',
    components: {
        'realm': Realm,
    }
});



