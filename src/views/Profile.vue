<template>
    <div>
        <div class="page-title">
            <h3>{{"profileTitle" | localize}}</h3>
        </div>

        <form class="form" @submit.prevent="submitHandler">
            <div class="input-field">
                <input
                    id="description"
                    type="text"
                    v-model="name"
                    :class="{ invalid: $v.name.$dirty && !$v.name.required }"
                />
                <label for="description">{{"name" | localize}}</label>
                <span class="helper-text invalid"
                  v-if="$v.name.$dirty && !$v.name.required"
                >{{"Message_EnterName" | localize}}</span>
            </div>

            <p>
                <label>
                    <input name="lang" type="radio" v-model="locale" value="ru-RU"/>
                    <span>Русский язык</span>
                </label>
            </p>
            <p>
                <label>
                    <input name="lang" type="radio" v-model="locale" value="uk" />
                    <span>Українська мова</span>
                </label>
            </p>
            <p>
                <label>
                    <input name="lang" type="radio"  v-model="locale" value="en-US" />
                    <span>English</span>
                </label>
            </p>

            <button class="btn waves-effect waves-light" type="submit">
                {{"Update" | localize}}
                <i class="material-icons right">send</i>
            </button>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";
import localize from  "@/filters/localize.filter";

export default {
    data: () => ({
        name: "",
        locale: "ru-RU"
    }),
    metaInfo() {
        return {
            title: this.$title('profileTitle'),
        }
    },
    mounted() {
        this.name = this.info.name;
        this.locale = this.info.locale;
        
        setTimeout(() => {
            M.updateTextFields();
        }, 0);
    },
    validations: {
        name: { required },
    },
    computed: {
        ...mapGetters(["info"]),
    },
    methods: {
    ...mapActions(['updateInfo']),

    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      try {
        await this.updateInfo({
          name: this.name,
          locale: this.locale
        });
        
        localStorage.setItem('locale', this.locale);
      } catch (e) {}

    }
  }
};
</script>
