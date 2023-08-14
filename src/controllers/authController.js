const bcrypt = require('bcryptjs');
const Jwt = require('jsonwebtoken');

const authService = require('@services/authService');
const catchAsync = require('@utils/catchAsync');
const AppError = require('@utils/AppError');

const authController = (() => {
  const login = catchAsync(async (request, response, next) => {
    const { email, password } = request.body;
    const user = await authService.findByEmail(email);

    if (!user) {
      return next(new AppError(`Email or passowrd incorrect`, 400));
    }

    const passwordMatch = await bcrypt.compare(password, user?.password);

    if (!passwordMatch) {
      return next(new AppError(`Email or passowrd incorrect`, 400));
    }

    const accessToken = Jwt.sign({ id: user?.id }, process.env.SECRET, {
      expiresIn: 315360000,
    });
    delete user.password;

    response.json({
      status: 'success',
      data: {
        accessToken,
        user,
      },
    });
  });

  return {
    login,
  };
})();

module.exports = authController;
