"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Lint = require("tslint");
var AbstractConfigDependentRule = (function (_super) {
    tslib_1.__extends(AbstractConfigDependentRule, _super);
    function AbstractConfigDependentRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractConfigDependentRule.prototype.isEnabled = function () {
        return _super.prototype.isEnabled.call(this) && this.ruleArguments.length !== 0;
    };
    return AbstractConfigDependentRule;
}(Lint.Rules.AbstractRule));
exports.AbstractConfigDependentRule = AbstractConfigDependentRule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBK0I7QUFFL0I7SUFBMEQsdURBQXVCO0lBQWpGOztJQUlBLENBQUM7SUFIVSwrQ0FBUyxHQUFoQjtRQUNJLE1BQU0sQ0FBQyxpQkFBTSxTQUFTLFdBQUUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUNMLGtDQUFDO0FBQUQsQ0FBQyxBQUpELENBQTBELElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUloRjtBQUpxQixrRUFBMkIifQ==