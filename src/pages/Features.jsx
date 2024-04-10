const Features = () => {
  return (
    <div id="features" className="features">
      <div className="f-section-large">
        <div className="f-container-regular-2">
          <div className="f-margin-bottom-64">
            <div className="f-title-wrapper-center">
              <div className="f-margin-bottom-08">
                <div className="f-heading-detail-small">Features</div>
              </div>
              <div className="f-margin-bottom-16">
                <h3 className="f-h3-heading">Solchat Features</h3>
              </div>
              <p className="f-paragraph-large">
                Solchat is a user-friendly protocol that allows users to
                communicate from wallet to wallet or between multiple wallets.
              </p>
            </div>
          </div>
          <div className="f-feature-card-wrapper">
            <div className="f-feature-card-outline">
              <div className="f-feature-icon-round">
                <img
                  src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f40b6b404392e30ae2c407_icons8-encryption-64%20(1).png"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div>
                <div className="f-margin-bottom-08">
                  <div className="f-sub-heading-regular">Encryption</div>
                </div>
                <p className="f-paragraph-regular f-text-weight-medium">
                  Solana stores encrypted messages, decrypted upon wallet
                  connection.
                </p>
              </div>
            </div>
            <div className="f-feature-card-outline">
              <div className="f-feature-icon-round">
                <img
                  src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f40bd37c72da803be9af45_icons8-security-shield-64.png"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div>
                <div className="f-margin-bottom-08">
                  <div className="f-sub-heading-regular">Security</div>
                </div>
                <p className="f-paragraph-regular f-text-weight-medium">
                  Messages are transactions with custom memos; use a burner
                  wallet with 0.1 SOL for months.
                </p>
              </div>
            </div>
            <div className="f-feature-card-outline">
              <div className="f-feature-icon-round">
                <img
                  src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f40c0a324894b6bd185d5d_icons8-video-call-64.png"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div>
                <div className="f-margin-bottom-08">
                  <div className="f-sub-heading-regular">Video Calls</div>
                </div>
                <p className="f-paragraph-regular f-text-weight-medium">
                  Video call your friends wallet to wallet, using WebRTC just
                  like WhatsApp.
                </p>
              </div>
            </div>
            <div className="f-feature-card-outline">
              <div className="f-feature-icon-round">
                <img
                  src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f40c6d9dbc3f3972c2df13_icons8-pictures-64.png"
                  loading="lazy"
                  width="40"
                  alt=""
                />
              </div>
              <div>
                <div className="f-margin-bottom-08">
                  <div className="f-sub-heading-regular">Pictures</div>
                </div>
                <p className="f-paragraph-regular f-text-weight-medium">
                  Post images stored on-chain storages like Arweave or IPFS.
                </p>
              </div>
            </div>
            <div className="f-feature-card-outline">
              <div className="f-feature-icon-round">
                <img
                  src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f40cbbc574eebf88cde7b0_icons8-call-64.png"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div>
                <div className="f-margin-bottom-08">
                  <div className="f-sub-heading-regular">Audio Calls</div>
                </div>
                <p className="f-paragraph-regular f-text-weight-medium">
                  Talk to your friends via audio, encrypted and peer-to-peer
                  using WebRTC.
                </p>
              </div>
            </div>
            <div className="f-feature-card-outline">
              <div className="f-feature-icon-round">
                <img
                  src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f40d149bca9e7944f59464_icons8-payments-64.png"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div>
                <div className="f-margin-bottom-08">
                  <div className="f-sub-heading-regular">Payments</div>
                </div>
                <p className="f-paragraph-regular f-text-weight-medium">
                  Send SOL as payments to your friends, similar to CashApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
