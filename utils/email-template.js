export const generateEmailTemplate = ({
    userName,
    subscriptionName,
    renewalDate,
    planName,
    price,
    paymentMethod,
    accountSettingsLink,
    supportLink,
    daysLeft,
}) => `
<div style="margin: 0; padding: 0; background-color: #f0eeeb; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">

  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f0eeeb;">
    <tr>
      <td align="center" style="padding: 40px 16px;">

        <!-- Pre-header text (hidden) -->
        <div style="display: none; max-height: 0; overflow: hidden; mso-hide: all;">
          Your ${subscriptionName} subscription renews in ${daysLeft} days &mdash; ${renewalDate}
        </div>

        <!-- Main container -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 560px; margin: 0 auto;">

          <!-- Logo / Brand -->
          <tr>
            <td style="padding: 0 0 40px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="width: 32px; height: 32px; background-color: #0a0a0a; border-radius: 8px;" width="32" height="32">
                    <div style="width: 32px; height: 32px; line-height: 32px; text-align: center; color: #ffffff; font-size: 14px; font-weight: 700; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;">S</div>
                  </td>
                  <td style="padding-left: 12px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 15px; font-weight: 600; color: #0a0a0a; letter-spacing: -0.3px;">
                    ${subscriptionName}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card body -->
          <tr>
            <td>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);">

                <!-- Urgency badge + greeting -->
                <tr>
                  <td style="padding: 40px 40px 0 40px;">
                    <!-- Badge -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
                      <tr>
                        <td style="background-color: #0a0a0a; border-radius: 100px; padding: 6px 14px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 12px; font-weight: 600; color: #ffffff; letter-spacing: 0.4px; text-transform: uppercase;">
                          ${daysLeft} days left
                        </td>
                      </tr>
                    </table>

                    <!-- Heading -->
                    <h1 style="margin: 0 0 12px 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 26px; font-weight: 700; line-height: 1.25; color: #0a0a0a; letter-spacing: -0.5px;">
                      Renewal Reminder
                    </h1>

                    <!-- Greeting -->
                    <p style="margin: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 15px; line-height: 1.6; color: #52525b;">
                      Hi ${userName}, your <strong style="color: #0a0a0a; font-weight: 600;">${planName}</strong> plan renews on <strong style="color: #0a0a0a; font-weight: 600;">${renewalDate}</strong>. Here&rsquo;s a summary of your upcoming charge.
                    </p>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding: 28px 40px;">
                    <div style="height: 1px; background-color: #e4e4e7;"></div>
                  </td>
                </tr>

                <!-- Subscription details -->
                <tr>
                  <td style="padding: 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <!-- Plan -->
                      <tr>
                        <td style="padding: 14px 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 13px; color: #a1a1aa; letter-spacing: 0.2px; text-transform: uppercase; font-weight: 500;" width="40%">
                          Plan
                        </td>
                        <td style="padding: 14px 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 15px; color: #0a0a0a; font-weight: 500; text-align: right;">
                          ${planName}
                        </td>
                      </tr>
                      <!-- Separator -->
                      <tr>
                        <td colspan="2" style="padding: 0;">
                          <div style="height: 1px; background-color: #f4f4f5;"></div>
                        </td>
                      </tr>
                      <!-- Price -->
                      <tr>
                        <td style="padding: 14px 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 13px; color: #a1a1aa; letter-spacing: 0.2px; text-transform: uppercase; font-weight: 500;" width="40%">
                          Amount
                        </td>
                        <td style="padding: 14px 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 15px; color: #0a0a0a; font-weight: 600; text-align: right;">
                          ${price}
                        </td>
                      </tr>
                      <!-- Separator -->
                      <tr>
                        <td colspan="2" style="padding: 0;">
                          <div style="height: 1px; background-color: #f4f4f5;"></div>
                        </td>
                      </tr>
                      <!-- Payment Method -->
                      <tr>
                        <td style="padding: 14px 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 13px; color: #a1a1aa; letter-spacing: 0.2px; text-transform: uppercase; font-weight: 500;" width="40%">
                          Payment
                        </td>
                        <td style="padding: 14px 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 15px; color: #0a0a0a; font-weight: 500; text-align: right;">
                          ${paymentMethod}
                        </td>
                      </tr>
                      <!-- Separator -->
                      <tr>
                        <td colspan="2" style="padding: 0;">
                          <div style="height: 1px; background-color: #f4f4f5;"></div>
                        </td>
                      </tr>
                      <!-- Renewal Date -->
                      <tr>
                        <td style="padding: 14px 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 13px; color: #a1a1aa; letter-spacing: 0.2px; text-transform: uppercase; font-weight: 500;" width="40%">
                          Renewal
                        </td>
                        <td style="padding: 14px 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 15px; color: #0a0a0a; font-weight: 500; text-align: right;">
                          ${renewalDate}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- CTA Button -->
                <tr>
                  <td style="padding: 32px 40px 12px 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td align="center">
                          <a href="${accountSettingsLink}" target="_blank" style="display: inline-block; width: 100%; background-color: #0a0a0a; color: #ffffff; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 14px; font-weight: 600; text-align: center; text-decoration: none; padding: 14px 24px; border-radius: 10px; letter-spacing: -0.2px; box-sizing: border-box;">
                            Manage Subscription
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Secondary link -->
                <tr>
                  <td style="padding: 0 40px 40px 40px;" align="center">
                    <a href="${supportLink}" target="_blank" style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 13px; color: #a1a1aa; text-decoration: none; font-weight: 500; padding: 8px 0; display: inline-block;">
                      Need help? Contact support &rarr;
                    </a>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 0 0 0;" align="center">
              <p style="margin: 0 0 6px 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 12px; color: #a1a1aa; line-height: 1.5;">
                You&rsquo;re receiving this because you&rsquo;re subscribed to ${subscriptionName}.
              </p>
              <p style="margin: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 12px; color: #a1a1aa; line-height: 1.5;">
                <a href="${accountSettingsLink}" target="_blank" style="color: #71717a; text-decoration: underline;">Unsubscribe</a>
                &nbsp;&middot;&nbsp;
                <a href="${accountSettingsLink}" target="_blank" style="color: #71717a; text-decoration: underline;">Preferences</a>
                &nbsp;&middot;&nbsp;
                <a href="${supportLink}" target="_blank" style="color: #71717a; text-decoration: underline;">Help</a>
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</div>
`

export const emailReminderTemplates = [{
        label: '7 days before reminder',
        generateSubject: (data) =>
            `📅 ${data.subscriptionName} Renews in 7 Days - Time to Review`,
        generateBody: (data) => generateEmailTemplate({...data, daysLeft: 7 }),
    },
    {
        label: '5 days before reminder',
        generateSubject: (data) =>
            `⌛ ${data.subscriptionName} Renews in 5 Days - Stay Subscribed!`,
        generateBody: (data) => generateEmailTemplate({...data, daysLeft: 5 }),
    },
    {
        label: '2 days before reminder',
        generateSubject: (data) =>
            `⚠️ Final Notice: ${data.subscriptionName} Renews in 48 Hours`,
        generateBody: (data) => generateEmailTemplate({...data, daysLeft: 2 }),
    },
    {
        label: '1 day before reminder',
        generateSubject: (data) =>
            `🚨 Urgent: ${data.subscriptionName} Renews Tomorrow!`,
        generateBody: (data) => generateEmailTemplate({...data, daysLeft: 1 }),
    },
]