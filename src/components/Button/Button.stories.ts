import TheButton from "./TheButton.vue";
import { action } from "@storybook/addon-actions";
import "../../style.css";

export default {
  component: TheButton,
};
// Should accept handler as props

export const Primary = () => ({
  components: { TheButton },
  template: "<TheButton label='Primary' />",
});

export const Secondary = () => ({
  components: { TheButton },
  template: "<TheButton label='Secondary' type='secondary' />",
});

export const Handler = () => ({
  components: { TheButton },
  methods: { clickHandler: action("clicked") },
  template:
    "<TheButton @click='clickHandler' label='Handler' type='primary' />",
});

export const ExtraClass = () => ({
  components: { TheButton },
  template:
    "<TheButton classes='w-full text-xl' label='Extra Class' type='primary' />",
});
