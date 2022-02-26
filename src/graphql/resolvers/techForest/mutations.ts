import { TechLeaf } from "../../../models/TechForest.model";
import { success } from "../responseStatus";
import { TechLeafType } from "../types";

const techForestMutations = {
  /**
   * techLeaf追加する.
   *
   * @param techLeaf - techLeaf名
   * @returns success : successステータス,作成したtechLeafユーザー
   * @returns error : errorステータス
   */
  createTechLeaf: async (
    _parent: any,
    { techLeaf }: { techLeaf: TechLeafType }
  ) => {
    const { name } = techLeaf;

    try {
      const createTechLeaf = new TechLeaf({ name });
      const result = await createTechLeaf.save();
      return success(result);
    } catch (e) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
};

export default techForestMutations;