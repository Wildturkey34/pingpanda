import { createCheckoutSession } from '@/lib/stripe';
import { router } from '../__internals/router';
import { privateProcdure } from '../procedures';

export const PaymentRouter = router({
  createCheckoutSession: privateProcdure.mutation(async ({ c, ctx }) => {
    const { user } = ctx;

    const session = await createCheckoutSession({
      userEmail: user.email,
      userId: user.id,
    });

    return c.json({ url: session.url });
  }),

  getUserPlan: privateProcdure.query(async ({ c, ctx }) => {
    const { user } = ctx;
    return c.json({ plan: user.plan });
  }),
});
