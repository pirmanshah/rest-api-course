const transactionService = require('@services/transactionService');
const enrollService = require('@services/enrollService');
const cartService = require('@services/cartService');
const catchAsync = require('@utils/catchAsync');

const transactionController = (() => {
  const index = catchAsync(async (request, response) => {
    const { userId } = request.query;

    const transactions = await transactionService.findByUserId(Number(userId));

    response.json({
      status: 'success',
      data: {
        transactions,
      },
    });
  });

  const create = catchAsync(async (request, response) => {
    const { sender, bankId, account, userId, carts, amount } = request.body;
    const { filename } = request.file;
    const parsedCart = JSON.parse(carts);

    const transactionPayload = {
      sender: sender,
      bankId: Number(bankId),
      account: account,
      amount: Number(amount),
      image: `/storage/transactions/${filename}`,
    };

    const transactionId = await transactionService.create(transactionPayload);

    const cartPayload = parsedCart.map((item) => ({
      status: 1,
      id_user: Number(userId),
      id_course: item.courseId,
      transactionId: Number(transactionId),
    }));

    await enrollService.create(cartPayload);
    await cartService.deletedMany(cartPayload);

    response.json({
      status: 'success',
      message: 'Submit data success',
    });
  });

  return {
    index,
    create,
  };
})();

module.exports = transactionController;
