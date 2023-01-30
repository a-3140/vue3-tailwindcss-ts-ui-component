declare const _default: {
    TheButton: import("vue").DefineComponent<{
        label: {
            type: StringConstructor;
            required: true;
        };
        type: {
            type: StringConstructor;
            required: true;
        };
        classes: {
            type: StringConstructor;
            required: true;
        };
        clickHandler: {
            type: FunctionConstructor;
            required: true;
        };
    }, {
        primary: string;
        secondary: string;
        readonly classNames: (...classes: unknown[]) => string;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: StringConstructor;
            required: true;
        };
        type: {
            type: StringConstructor;
            required: true;
        };
        classes: {
            type: StringConstructor;
            required: true;
        };
        clickHandler: {
            type: FunctionConstructor;
            required: true;
        };
    }>>, {}>;
};
export default _default;
