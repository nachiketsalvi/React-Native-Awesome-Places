"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var FAIL_MESSAGE = "shorthand properties should come first";
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new ObjectWalker(sourceFile, this.ruleName, undefined));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var ObjectWalker = (function (_super) {
    tslib_1.__extends(ObjectWalker, _super);
    function ObjectWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectWalker.prototype.walk = function (sourceFile) {
        var _this = this;
        var cb = function (node) {
            if (node.kind === ts.SyntaxKind.ObjectLiteralExpression)
                _this._checkObjectLiteral(node);
            return ts.forEachChild(node, cb);
        };
        return ts.forEachChild(sourceFile, cb);
    };
    ObjectWalker.prototype._checkObjectLiteral = function (node) {
        var seenRegularProperty = false;
        for (var _i = 0, _a = node.properties; _i < _a.length; _i++) {
            var property = _a[_i];
            if (property.kind === ts.SyntaxKind.PropertyAssignment) {
                seenRegularProperty = true;
            }
            else if (property.kind === ts.SyntaxKind.SpreadAssignment) {
                seenRegularProperty = false;
            }
            else if (seenRegularProperty && property.kind === ts.SyntaxKind.ShorthandPropertyAssignment) {
                this.addFailureAtNode(property, FAIL_MESSAGE);
            }
        }
    };
    return ObjectWalker;
}(Lint.AbstractWalker));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0U2hvcnRoYW5kUHJvcGVydGllc0ZpcnN0UnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9iamVjdFNob3J0aGFuZFByb3BlcnRpZXNGaXJzdFJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQWlDO0FBQ2pDLDZCQUErQjtBQUUvQixJQUFNLFlBQVksR0FBRyx3Q0FBd0MsQ0FBQztBQUU5RDtJQUEwQixnQ0FBdUI7SUFBakQ7O0lBSUEsQ0FBQztJQUhVLG9CQUFLLEdBQVosVUFBYSxVQUF5QjtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQUpELENBQTBCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUloRDtBQUpZLG9CQUFJO0FBTWpCO0lBQTJCLHdDQUF5QjtJQUFwRDs7SUFzQkEsQ0FBQztJQXJCVSwyQkFBSSxHQUFYLFVBQVksVUFBeUI7UUFBckMsaUJBT0M7UUFORyxJQUFNLEVBQUUsR0FBRyxVQUFDLElBQWE7WUFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO2dCQUNwRCxLQUFJLENBQUMsbUJBQW1CLENBQTZCLElBQUksQ0FBQyxDQUFDO1lBQy9ELE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUM7UUFDRixNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNPLDBDQUFtQixHQUEzQixVQUE0QixJQUFnQztRQUN4RCxJQUFJLG1CQUFtQixHQUFHLEtBQUssQ0FBQztRQUNoQyxHQUFHLENBQUMsQ0FBbUIsVUFBZSxFQUFmLEtBQUEsSUFBSSxDQUFDLFVBQVUsRUFBZixjQUFlLEVBQWYsSUFBZTtZQUFqQyxJQUFNLFFBQVEsU0FBQTtZQUNmLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELG1CQUFtQixHQUFHLElBQUksQ0FBQztZQUMvQixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7Z0JBRTFELG1CQUFtQixHQUFHLEtBQUssQ0FBQztZQUNoQyxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7Z0JBQzVGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDbEQsQ0FBQztTQUNKO0lBQ0wsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQXRCRCxDQUEyQixJQUFJLENBQUMsY0FBYyxHQXNCN0MifQ==