"use strict";
// 1 
// Target é a Função/Class por exemplo : class Example
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log() {
    return function (target, propertKey) {
        console.log(target, propertKey);
    };
}
// @log()
class Example {
}
// 2
function setApiVersion(apiVersion) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.version = apiVersion;
            }
        };
    };
}
let API = class API {
};
API = __decorate([
    setApiVersion("v1.0.0.1")
], API);
let WebHook = class WebHook {
};
WebHook = __decorate([
    setApiVersion("v1.0.1")
], WebHook);
console.log(new API);
console.log(new WebHook);
// 3 - Decorador de Propriedade
function minLength(length) {
    return (target, propertKey) => {
        let val = target[propertKey];
        const getter = () => val;
        const setter = (value) => {
            if (value.length < length) {
                throw new Error(`Value for ${propertKey} need more then ${length}`);
            }
            val = value;
        };
        Object.defineProperty(target, propertKey, {
            get: getter,
            set: setter
        });
    };
}
class Category {
    constructor(t) {
        this.title = t;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
}
__decorate([
    minLength(2)
], Category.prototype, "title", void 0);
const category01 = new Category("1511551151");
try {
    category01.setTitle("2255");
}
catch (error) {
    console.error(error);
}
