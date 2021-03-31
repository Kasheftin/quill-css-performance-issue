<template>
  <v-row>
    <v-col auto> 
      <v-btn @click="showContent = !showContent">
        {{ showContent ? 'Hide' : 'Show' }}
      </v-btn>
      <v-btn @click="setClass = !setClass">
        {{ setClass ? 'Remove li counter class' : 'Add li counter class' }}
      </v-btn>
      <div
        :class="{
          'ql-editor': setClass
        }"
        v-html="showContent ? sampleText : ''"
      />
    </v-col>
  </v-row>
</template>

<script>
const sampleText = `
<ol><li><span style="background-color: rgb(255, 255, 204);">NOT MDI “default workspace”</span></li><li>Campaign</li><li>Payments</li><li>Home</li><li>Home_work</li><li>Apartment</li><li>Store</li><li>Deck</li><li>Emoji_food_beverage</li><li>perm_phone_msg</li><li>email</li>
<li>shopping_basket</li><li>shopping_cart</li><li>monetization_on</li><li>local_mall</li></ol><p><br></p><p><strong>People:</strong></p><p><br></p><ol><li>account_box</li><li>group</li><li>groups</li></ol><p><br></p><p><strong>Industry:</strong></p><p><br></p><ol><li>directions_car</li><li>local_shipping</li><li>flight</li><li>construction</li><li>architecture</li><li>local_hospital</li><li>local_pharmacy</li><li>movie</li><li>theaters</li><li>palette</li></ol><p><br></p><p><strong>Technology:</strong></p><p><br></p><ol><li>tv</li><li>videocam</li><li>bug_report</li><li>print</li><li>send</li><li>psychology</li><li>code</li><li>language</li></ol><p><br></p><p><strong>Miscallaneous:</strong></p><p><br></p><ol><li>event</li><li>schedule</li><li>bar_chart</li><li>extension</li><li>flag</li><li>grade</li><li>casino</li><li>emoji_objects</li><li>table_chart</li><li>pie_chart</li><li>donut_large</li><li>ac_unit</li><li>explore</li>
<li>new_releases</li><li>near_me</li><li><span style="background-color: rgb(255, 255, 204);">NOT MDI “dots”</span></li><li>local_fire_department</li><li>local_florist</li><li>public</li><li>eco</li></ol>
`

export default {
  data() {
    return {
      sampleText: Array(10).fill(sampleText).join("\n"),
      showContent: false,
      setClass: false
    }
  }
}
</script>

<style>
.ql-editor p, .ql-editor ol, .ql-editor ul, .ql-editor pre, .ql-editor blockquote, .ql-editor h1, .ql-editor h2, .ql-editor h3, .ql-editor h4, .ql-editor h5, .ql-editor h6 {
    margin: 0;
    padding: 0;
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    counter-increment: list-0;
}
.ql-editor ol>li, .ql-editor ul>li {
    list-style-type: none;
}
.ql-editor ol li:before {
  content: counter(list-0, decimal) ". ";
}
.ql-editor li::before {
    margin-left: -1.5em;
    margin-right: 0.3em;
    text-align: right;
}
.ql-editor li::before {
    display: inline-block;
    white-space: nowrap;
    width: 1.2em;
}
</style>