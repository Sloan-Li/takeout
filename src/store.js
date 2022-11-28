// 导入数据
import data from "../data.json";
// 状态管理
export default (Vuex) => {
  return new Vuex.Store({
    state: {
      totalMoney: 0, //已选购商品的总价格
      productArray: [],//已选购商品数组
      data,
      food: {},
      shopCarShow: false
    },
    mutations: {
      hoverShopCar(state) {
        let boolen = !state.shopCarShow;
        state.shopCarShow = boolen;
      },
      // 设置商品总价格
      setTotalMoney(state, num) {
        state.totalMoney = num;
      },
      // 计算已选购商品总价格
      mathTotalMoney(state) {
        let total = 0;
        for (let i = 0; i < state.productArray.length; i++) {
          let item = state.productArray[i];
          total += (item.count * item.price);
        }
        state.totalMoney = total;
      },
      // 商品放入或拿出购物车
      setProductArray(state, obj) {
        let index = -1;
        for (let i = 0; i < state.productArray.length; i++) {
          var item = state.productArray[i];
          if (obj.id == item.id) {
            index = i;
            break;
          }
        }
        if (index >= 0) {
          if (obj.count <= 0) {
            state.productArray.splice(index, 1);
          } else {
            state.productArray[index] = obj;
          }
        } else {
          state.productArray.push(obj);
        }
      },
      clearProduct(state) {
        state.productArray = [];
      },
      selectedFood(state, f) {
        state.food = f;
      }
    },
    getters: {
      getshopCarShow(state) {
        return state.shopCarShow;
      },
      getSelectedFood(state) {
        return state.food;
      },
      getTotalMoney(state) {
        return state.totalMoney;
      },
      getProductArray(state) {
        return state.productArray;
      },
      getProductById: (state, getters) => (id) => {
        for (let i = 0; i < state.productArray.length; i++) {
          var item = state.productArray[i];
          if (item.id == id) {
            return item;
          }
        }
        return false;
      },
      getAllData(state) {
        return state.data;
      },
      getGoodsData(state) {
        if (state.data) {
          return state.data.goods;
        }
        return {};
      },
      getRatingsData(state) {
        if (state.data) {
          return state.data.ratings;
        }
        return {};
      },
      getSellerData(state) {
        if (state.data) {
          return state.data.seller;
        }
        return {};
      }
    }
  });
}