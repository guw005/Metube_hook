class User < ApplicationRecord
    validates :password_digest, :session_token, :email, presence: true, uniqueness: true
    validates :username, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token

    has_many :videos,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Video

    has_many :comments,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Comment,
        dependent: :destroy

    attr_reader :password
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64 
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end
end
