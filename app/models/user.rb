class User < ActiveRecord::Base
  has_many :mentions

  def get_filtered_mentions
    @filtered_mentions = Mention.where(
      :created_at => Time.now.beginning_of_week..Time.now.end_of_week,
      :user_id => self.id)
      .order('created_at DESC')
      .limit(12)
  end
end
