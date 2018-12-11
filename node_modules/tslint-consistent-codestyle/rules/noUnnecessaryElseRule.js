"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Lint = require("tslint");
var utils = require("tsutils");
var walker_1 = require("../src/walker");
var utils_1 = require("../src/utils");
var FAIL_MESSAGE = "unnecessary else";
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new IfWalker(sourceFile, this.ruleName, undefined));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var IfWalker = (function (_super) {
    tslib_1.__extends(IfWalker, _super);
    function IfWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IfWalker.prototype._checkIfStatement = function (node) {
        if (node.elseStatement !== undefined &&
            !utils_1.isElseIf(node) &&
            utils.endsControlFlow(node.thenStatement))
            this.addFailureAtNode(node.getChildAt(5, this.sourceFile), FAIL_MESSAGE);
    };
    return IfWalker;
}(walker_1.AbstractIfStatementWalker));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9Vbm5lY2Vzc2FyeUVsc2VSdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm9Vbm5lY2Vzc2FyeUVsc2VSdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDZCQUErQjtBQUMvQiwrQkFBaUM7QUFDakMsd0NBQTBEO0FBQzFELHNDQUF3QztBQUV4QyxJQUFNLFlBQVksR0FBRyxrQkFBa0IsQ0FBQztBQUV4QztJQUEwQixnQ0FBdUI7SUFBakQ7O0lBSUEsQ0FBQztJQUhVLG9CQUFLLEdBQVosVUFBYSxVQUF5QjtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQUpELENBQTBCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUloRDtBQUpZLG9CQUFJO0FBTWpCO0lBQXVCLG9DQUErQjtJQUF0RDs7SUFPQSxDQUFDO0lBTmEsb0NBQWlCLEdBQTNCLFVBQTRCLElBQW9CO1FBQzVDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUztZQUNoQyxDQUFDLGdCQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2YsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFXLElBQUksQ0FBQyxVQUFVLENBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUFQRCxDQUF1QixrQ0FBeUIsR0FPL0MifQ==