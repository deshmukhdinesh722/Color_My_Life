import mongoose from "mongoose";
import { Cart } from "../../models/cart.model.js";
import { Product } from "../../models/product.model..js";
import { Carta } from "../../models/carts.model.js";
import { Cartb } from "../../models/cartB.models.js";
 

const addToCart = async (req, res) => {
  try {
    const { userId,userName, productId, quantity } = req.body;




    if (!userId || !userName || !productId || quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid data provided!",
      });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    let cart = await Cart.findOne({ userId,userName});

    if (!cart) {
      cart = new Cart({ userId,userName,items: [] });
    }

    const findCurrentProductIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (findCurrentProductIndex === -1) {
      cart.items.push({productId, quantity });
    } else {
      cart.items[findCurrentProductIndex].quantity += quantity;
    }
    await cart.save();
    
    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};
const addToCartA = async (req, res) => {
  try {
    const { userId,userName, productId, quantity } = req.body;




    if (!userId || !userName || !productId || quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid data provided!",
      });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    let cart = await Carta.findOne({ userId,userName});

    if (!cart) {
      cart = new Carta({ userId,userName,items: [] });
    }

    const findCurrentProductIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (findCurrentProductIndex === -1) {
      cart.items.push({productId, quantity });
    } else {
      cart.items[findCurrentProductIndex].quantity += quantity;
    }
    await cart.save();
    
    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};
  
  const fetchCart = async (req, res) => {
    try {
      const { userId,userName} = req.params;
  
      if (!userId || !userName ) {
        return res.status(400).json({
          success: false,
          message: "Invalid or missing userId!",
        });
      }
  
      const cart = await Cart.findOne({ userId }).populate({
        path: "items.productId",
        select: "image title price",
      });
  
      if (!cart) {
        return res.status(404).json({
          success: false,
          message: "Cart not found!",
        });
      }
  
      const validItems = cart.items.filter(
        (productItem) => productItem.productId
      );
  
      if (validItems.length < cart.items.length) {
        cart.items = validItems;
        await cart.save();
      }
  
      const populateCartItems = validItems.map((item) => ({
        productId: item.productId._id,
        image: item.productId.image,
        title: item.productId.title,
        price: item.productId.price,
        quantity: item.quantity,
      }));
  
      res.status(200).json({
        success: true,
        data: {
          ...cart._doc,
          items: populateCartItems,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error",
      });
    }
  };

  const updateCartQty = async (req, res) => {
    try {
      const { userId,userName,productId, quantity } = req.body;
 
  
      if (!userId || !userName || !productId || quantity <= 0) {
        return res.status(400).json({
          success: false,
          message: "Invalid data provided!",
        });
      }
  
      const cart = await Cart.findOne({ userId,userName });
      const cart2=await Carta.findOne({ userId,userName });
      if (!cart && !cart2) {
        return res.status(404).json({
          success: false,
          message: "Cart not found!",
        });
      }
  
      const findCurrentProductIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productId
      );
      const findCurrentProductIndex2 = cart2.items.findIndex(
        (item) => item.productId.toString() === productId
      );
  
      if (findCurrentProductIndex === -1) {
        return res.status(404).json({
          success: false,
          message: "Cart item not present !",
        });
      }
      if (findCurrentProductIndex2 === -1) {
        return res.status(404).json({
          success: false,
          message: "Cart item not present !",
        });
      }
      cart.items[findCurrentProductIndex].quantity = quantity;
      await cart.save();

      cart2.items[findCurrentProductIndex].quantity = quantity;
      await cart2.save();

      await cart.populate({
        path: "items.productId",
        select: "image title price ",
      });
  
      const populateCartItems = cart.items.map((item) => ({
        productId: item.productId ? item.productId._id : null,
        image: item.productId ? item.productId.image : null,
        title: item.productId ? item.productId.title : "Product not found",
        price: item.productId ? item.productId.price : null,
        quantity: item.quantity,
      }));
  
      res.status(200).json({
        success: true,
        data: {
          ...cart._doc,
          items: populateCartItems,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error",
      });
    }
  };
  
  const deleteCartItem = async (req, res) => {
    try {
      const { userId, userName,productId } = req.params;
      if (!userId ||!userName || !productId) {
        return res.status(400).json({
          success: false,
          message: "Invalid data provided!",
        });
      }
  
      const cart = await Cart.findOne({ userId,userName }).populate({
        path: "items.productId",
        select: "image title price ",
      });
  
      if (!cart) {
        return res.status(404).json({
          success: false,
          message: "Cart not found!",
        });
      }
  
      cart.items = cart.items.filter(
        (item) => item.productId._id.toString() !== productId
      );
  
      await cart.save();
  
      await cart.populate({
        path: "items.productId",
        select: "image title price ",
      });
  
      const populateCartItems = cart.items.map((item) => ({
        productId: item.productId ? item.productId._id : null,
        image: item.productId ? item.productId.image : null,
        title: item.productId ? item.productId.title : "Product not found",
        price: item.productId ? item.productId.price : null,
        quantity: item.quantity,
      }));
  
      res.status(200).json({
        success: true,
        data: {
          ...cart._doc,
          items: populateCartItems,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error",
      });
    }
  };

  const deleteUserFromCart = async (req, res) => {
    try {
      const {id } = req.params;
      if (!id ) {
        return res.status(400).json({
          success: false,
          message: "Invalid data provided!",
        });
      }
  
      const cart = await Cart.findByIdAndDelete(id)
  
      if (!cart) {
        return res.status(404).json({
          success: false,
          message: "Cart not found!",
        });
      }
  
      res.json({
        success: true,
        message:'Product deleted '
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error",
      });
    }
  };

export {addToCart,fetchCart,updateCartQty,deleteCartItem,addToCartA,deleteUserFromCart}