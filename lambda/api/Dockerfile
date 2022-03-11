# Lambda - Python用コンテナイメージを使用
FROM public.ecr.aws/lambda/python:3.8

# Pythonのパッケージマネージャを最新化
RUN pip install --upgrade pip

# api配下をコンテナイメージにコピー
COPY . ./

# requirements.txtで記述した依存パッケージを一括インストール
RUN pip install -r requirements.txt

# コンテナ起動時の実行関数を定義
CMD ["script.lambda_handler"]
